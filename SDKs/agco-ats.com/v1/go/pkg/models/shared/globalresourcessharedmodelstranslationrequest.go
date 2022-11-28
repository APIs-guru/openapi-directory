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

// GlobalResourcesSharedModelsTranslationRequest
// A request to translate specified strings into specified locales
type GlobalResourcesSharedModelsTranslationRequest struct {
	ApprovalUserID   *int32                                                 `json:"ApprovalUserId,omitempty" form:"name=ApprovalUserId"`
	CcEmailAddresses []string                                               `json:"CCEmailAddresses" form:"name=CCEmailAddresses"`
	ChargeToAccount  string                                                 `json:"ChargeToAccount" form:"name=ChargeToAccount"`
	Deadline         time.Time                                              `json:"Deadline" form:"name=Deadline"`
	ID               *int32                                                 `json:"Id,omitempty" form:"name=Id"`
	LocaleIds        []int32                                                `json:"LocaleIds" form:"name=LocaleIds"`
	Notes            string                                                 `json:"Notes" form:"name=Notes"`
	QuestionsUserID  *int32                                                 `json:"QuestionsUserId,omitempty" form:"name=QuestionsUserId"`
	State            GlobalResourcesSharedModelsTranslationRequestStateEnum `json:"State" form:"name=State"`
	SubmittedBy      *int32                                                 `json:"SubmittedBy,omitempty" form:"name=SubmittedBy"`
	TranslatorEmail  *string                                                `json:"TranslatorEmail,omitempty" form:"name=TranslatorEmail"`
	TranslatorName   *string                                                `json:"TranslatorName,omitempty" form:"name=TranslatorName"`
}
