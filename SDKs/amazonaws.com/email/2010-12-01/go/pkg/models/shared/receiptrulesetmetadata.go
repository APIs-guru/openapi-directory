package shared

import (
	"time"
)

// ReceiptRuleSetMetadata
// <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p>
type ReceiptRuleSetMetadata struct {
	CreatedTimestamp *time.Time
	Name             *string
}
