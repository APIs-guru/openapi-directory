import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpenSearchAction
/** 
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
**/
export class OpenSearchAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=index" })
  index: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
