import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 * <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
