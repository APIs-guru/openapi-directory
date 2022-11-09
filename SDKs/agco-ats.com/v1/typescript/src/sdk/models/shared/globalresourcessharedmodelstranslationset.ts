import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsTranslationSetAttribute } from "./globalresourcessharedmodelstranslationsetattribute";

export enum GlobalResourcesSharedModelsTranslationSetStateEnum {
    OutForProcessing = "OutForProcessing"
,    Processing = "Processing"
,    PendingApproval = "PendingApproval"
,    OutForTranslation = "OutForTranslation"
,    Cancelled = "Cancelled"
,    Completed = "Completed"
}


// GlobalResourcesSharedModelsTranslationSet
/** 
 * A set of strings submitted for translation
**/
export class GlobalResourcesSharedModelsTranslationSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.GlobalResourcesSharedModelsTranslationSetAttribute })
  attributes?: GlobalResourcesSharedModelsTranslationSetAttribute[];

  @Metadata({ data: "json, name=FileIDs" })
  fileIDs: string[];

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=InDate" })
  inDate?: Date;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=OutDate" })
  outDate?: Date;

  @Metadata({ data: "json, name=State" })
  state: GlobalResourcesSharedModelsTranslationSetStateEnum;

  @Metadata({ data: "json, name=TranslationRequestID" })
  translationRequestId?: number;
}
