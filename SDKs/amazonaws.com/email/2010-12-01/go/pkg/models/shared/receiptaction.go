package shared

// ReceiptAction
// <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
type ReceiptAction struct {
	AddHeaderAction *AddHeaderAction
	BounceAction    *BounceAction
	LambdaAction    *LambdaAction
	S3Action        *S3Action
	SnsAction       *SnsAction
	StopAction      *StopAction
	WorkmailAction  *WorkmailAction
}
