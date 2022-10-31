package shared

type ActionTypeEnum string

const (
	ActionTypeEnumApplyIamPolicy  ActionTypeEnum = "APPLY_IAM_POLICY"
	ActionTypeEnumApplyScpPolicy  ActionTypeEnum = "APPLY_SCP_POLICY"
	ActionTypeEnumRunSsmDocuments ActionTypeEnum = "RUN_SSM_DOCUMENTS"
)
