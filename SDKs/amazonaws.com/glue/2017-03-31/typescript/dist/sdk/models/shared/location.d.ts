import { SpeakeasyBase } from "../../../internal/utils";
import { CodeGenNodeArg } from "./codegennodearg";
/**
 * The location of resources.
**/
export declare class Location extends SpeakeasyBase {
    dynamoDb?: CodeGenNodeArg[];
    jdbc?: CodeGenNodeArg[];
    s3?: CodeGenNodeArg[];
}
