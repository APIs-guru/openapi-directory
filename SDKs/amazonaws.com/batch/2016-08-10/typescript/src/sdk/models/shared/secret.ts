import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Secret
/** 
 * <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.</p>
**/
export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=valueFrom" })
  valueFrom: string;
}
