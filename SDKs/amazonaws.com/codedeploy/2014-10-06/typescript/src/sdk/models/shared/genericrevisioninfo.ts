import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenericRevisionInfo
/** 
 * Information about an application revision.
**/
export class GenericRevisionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentGroups" })
  deploymentGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=firstUsedTime" })
  firstUsedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUsedTime" })
  lastUsedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=registerTime" })
  registerTime?: Date;
}
