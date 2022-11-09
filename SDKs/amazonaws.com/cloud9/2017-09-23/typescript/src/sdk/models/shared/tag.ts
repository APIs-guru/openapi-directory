import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Metadata that is associated with Amazon Web Services resources. In particular, a name-value pair that can be associated with an Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by Amazon Web Services services. A system tag is prefixed with <code>"aws:"</code> and cannot be modified by the user.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
