import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 * <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
