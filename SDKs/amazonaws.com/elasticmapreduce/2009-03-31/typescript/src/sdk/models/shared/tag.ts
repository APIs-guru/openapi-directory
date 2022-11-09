import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
