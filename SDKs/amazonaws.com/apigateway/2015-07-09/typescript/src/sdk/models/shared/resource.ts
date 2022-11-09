import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Method } from "./method";


// Resource
/** 
 * <p>Represents an API resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=pathPart" })
  pathPart?: string;

  @Metadata({ data: "json, name=resourceMethods", elemType: shared.Method })
  resourceMethods?: Map<string, Method>;
}
