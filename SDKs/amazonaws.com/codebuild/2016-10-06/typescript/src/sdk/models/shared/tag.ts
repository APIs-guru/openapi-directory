import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
