import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpenSearchAction
/** 
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
**/
export class OpenSearchAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
