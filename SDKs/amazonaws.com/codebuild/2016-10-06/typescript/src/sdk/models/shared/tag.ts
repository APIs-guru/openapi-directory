import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
