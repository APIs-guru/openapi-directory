import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Method } from "./method";



// Resource
/** 
 * <p>Represents an API resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=pathPart" })
  pathPart?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceMethods", elemType: Method })
  resourceMethods?: Map<string, Method>;
}
