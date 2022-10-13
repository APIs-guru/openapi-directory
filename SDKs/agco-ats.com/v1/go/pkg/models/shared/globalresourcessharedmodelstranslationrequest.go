package shared

import (
	"time"
)

type GlobalResourcesSharedModelsTranslationRequestStateEnum string

const (
	GlobalResourcesSharedModelsTranslationRequestStateEnumNotSubmitted GlobalResourcesSharedModelsTranslationRequestStateEnum = "NotSubmitted"
	GlobalResourcesSharedModelsTranslationRequestStateEnumSubmitted    GlobalResourcesSharedModelsTranslationRequestStateEnum = "Submitted"
	GlobalResourcesSharedModelsTranslationRequestStateEnumCancelled    GlobalResourcesSharedModelsTranslationRequestStateEnum = "Cancelled"
	GlobalResourcesSharedModelsTranslationRequestStateEnumCompleted    GlobalResourcesSharedModelsTranslationRequestStateEnum = "Completed"
)

type GlobalResourcesSharedModelsTranslationRequest struct {
	ApprovalUserID   *int32                                                 `json:"ApprovalUserId" form:"name=ApprovalUserId"`
	CcEmailAddresses []string                                               `json:"CCEmailAddresses" form:"name=CCEmailAddresses"`
	ChargeToAccount  string                                                 `json:"ChargeToAccount" form:"name=ChargeToAccount"`
	Deadline         time.Time                                              `json:"Deadline" form:"name=Deadline"`
	ID               *int32                                                 `json:"Id" form:"name=Id"`
	LocaleIds        []int32                                                `json:"LocaleIds" form:"name=LocaleIds"`
	Notes            string                                                 `json:"Notes" form:"name=Notes"`
	QuestionsUserID  *int32                                                 `json:"QuestionsUserId" form:"name=QuestionsUserId"`
	State            GlobalResourcesSharedModelsTranslationRequestStateEnum `json:"State" form:"name=State"`
	SubmittedBy      *int32                                                 `json:"SubmittedBy" form:"name=SubmittedBy"`
	TranslatorEmail  *string                                                `json:"TranslatorEmail" form:"name=TranslatorEmail"`
	TranslatorName   *string                                                `json:"TranslatorName" form:"name=TranslatorName"`
}
