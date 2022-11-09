import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GlobalResourcesSharedModelsTranslationRequestStateEnum {
    NotSubmitted = "NotSubmitted"
,    Submitted = "Submitted"
,    Cancelled = "Cancelled"
,    Completed = "Completed"
}


// GlobalResourcesSharedModelsTranslationRequest
/** 
 * A request to translate specified strings into specified locales
**/
export class GlobalResourcesSharedModelsTranslationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApprovalUserId, form, name=ApprovalUserId;" })
  approvalUserId?: number;

  @Metadata({ data: "json, name=CCEmailAddresses, form, name=CCEmailAddresses;" })
  ccEmailAddresses: string[];

  @Metadata({ data: "json, name=ChargeToAccount, form, name=ChargeToAccount;" })
  chargeToAccount: string;

  @Metadata({ data: "json, name=Deadline, form, name=Deadline;" })
  deadline: Date;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=LocaleIds, form, name=LocaleIds;" })
  localeIds: number[];

  @Metadata({ data: "json, name=Notes, form, name=Notes;" })
  notes: string;

  @Metadata({ data: "json, name=QuestionsUserId, form, name=QuestionsUserId;" })
  questionsUserId?: number;

  @Metadata({ data: "json, name=State, form, name=State;" })
  state: GlobalResourcesSharedModelsTranslationRequestStateEnum;

  @Metadata({ data: "json, name=SubmittedBy, form, name=SubmittedBy;" })
  submittedBy?: number;

  @Metadata({ data: "json, name=TranslatorEmail, form, name=TranslatorEmail;" })
  translatorEmail?: string;

  @Metadata({ data: "json, name=TranslatorName, form, name=TranslatorName;" })
  translatorName?: string;
}
