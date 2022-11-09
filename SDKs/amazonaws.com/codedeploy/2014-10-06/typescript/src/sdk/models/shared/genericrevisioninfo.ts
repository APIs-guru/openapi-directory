import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenericRevisionInfo
/** 
 * Information about an application revision.
**/
export class GenericRevisionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentGroups" })
  deploymentGroups?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=firstUsedTime" })
  firstUsedTime?: Date;

  @Metadata({ data: "json, name=lastUsedTime" })
  lastUsedTime?: Date;

  @Metadata({ data: "json, name=registerTime" })
  registerTime?: Date;
}
