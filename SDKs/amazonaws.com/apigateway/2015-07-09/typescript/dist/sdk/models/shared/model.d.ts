import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents the data structure of a method's request or response payload.</p> <div class="remarks"> <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p> <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p> </div> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
**/
export declare class Model extends SpeakeasyBase {
    contentType?: string;
    description?: string;
    id?: string;
    name?: string;
    schema?: string;
}
