# PaymentStatusEnum

* `INIT` - Initiated. Payment has been initiated. * `ERRE` - ExecutionError. We experienced error on payment execution. * `ERRS` - StatusError. We experienced error retrieving payment status. Try again. * `ACCC` - AcceptedSettlementCompleted. Settlement on the creditor's account has been completed * `ACCP` - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful * `ACSC` - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed * `ACSP` - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution * `ACTC` - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful * `ACWC` - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent * `ACWP` - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account * `RCVD` - Received. Payment initiation has been received by the receiving agent * `PDNG` - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed * `RJCT` - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected. * `CANC` - Cancelled. Payment initiation has been cancelled before execution * `ACFC` - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive * `PATC` - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed * `PART` - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status

## Enum

* `INIT` (value: `'INIT'`)

* `ERRE` (value: `'ERRE'`)

* `ERRS` (value: `'ERRS'`)

* `ACCC` (value: `'ACCC'`)

* `ACCP` (value: `'ACCP'`)

* `ACSC` (value: `'ACSC'`)

* `ACSP` (value: `'ACSP'`)

* `ACTC` (value: `'ACTC'`)

* `ACWC` (value: `'ACWC'`)

* `ACWP` (value: `'ACWP'`)

* `RCVD` (value: `'RCVD'`)

* `PDNG` (value: `'PDNG'`)

* `RJCT` (value: `'RJCT'`)

* `CANC` (value: `'CANC'`)

* `ACFC` (value: `'ACFC'`)

* `PATC` (value: `'PATC'`)

* `PART` (value: `'PART'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


