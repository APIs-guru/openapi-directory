import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GlobalResourcesSharedModelsTranslationRequestStateEnum {
    NotSubmitted = "NotSubmitted",
    Submitted = "Submitted",
    Cancelled = "Cancelled",
    Completed = "Completed"
}


// GlobalResourcesSharedModelsTranslationRequest
/** 
 * A request to translate specified strings into specified locales
**/
export class GlobalResourcesSharedModelsTranslationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovalUserId, form, name=ApprovalUserId;" })
  approvalUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=CCEmailAddresses, form, name=CCEmailAddresses;" })
  ccEmailAddresses: string[];

  @SpeakeasyMetadata({ data: "json, name=ChargeToAccount, form, name=ChargeToAccount;" })
  chargeToAccount: string;

  @SpeakeasyMetadata({ data: "json, name=Deadline, form, name=Deadline;" })
  deadline: Date;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=LocaleIds, form, name=LocaleIds;" })
  localeIds: number[];

  @SpeakeasyMetadata({ data: "json, name=Notes, form, name=Notes;" })
  notes: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionsUserId, form, name=QuestionsUserId;" })
  questionsUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=State, form, name=State;" })
  state: GlobalResourcesSharedModelsTranslationRequestStateEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmittedBy, form, name=SubmittedBy;" })
  submittedBy?: number;

  @SpeakeasyMetadata({ data: "json, name=TranslatorEmail, form, name=TranslatorEmail;" })
  translatorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=TranslatorName, form, name=TranslatorName;" })
  translatorName?: string;
}
