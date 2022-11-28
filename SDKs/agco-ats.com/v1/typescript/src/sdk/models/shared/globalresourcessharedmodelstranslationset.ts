import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsTranslationSetAttribute } from "./globalresourcessharedmodelstranslationsetattribute";


export enum GlobalResourcesSharedModelsTranslationSetStateEnum {
    OutForProcessing = "OutForProcessing",
    Processing = "Processing",
    PendingApproval = "PendingApproval",
    OutForTranslation = "OutForTranslation",
    Cancelled = "Cancelled",
    Completed = "Completed"
}


// GlobalResourcesSharedModelsTranslationSet
/** 
 * A set of strings submitted for translation
**/
export class GlobalResourcesSharedModelsTranslationSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: GlobalResourcesSharedModelsTranslationSetAttribute })
  attributes?: GlobalResourcesSharedModelsTranslationSetAttribute[];

  @SpeakeasyMetadata({ data: "json, name=FileIDs" })
  fileIDs: string[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InDate" })
  inDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=OutDate" })
  outDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: GlobalResourcesSharedModelsTranslationSetStateEnum;

  @SpeakeasyMetadata({ data: "json, name=TranslationRequestID" })
  translationRequestId?: number;
}
