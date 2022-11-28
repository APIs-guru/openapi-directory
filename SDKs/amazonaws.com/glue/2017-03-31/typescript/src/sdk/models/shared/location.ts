import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeGenNodeArg } from "./codegennodearg";



// Location
/** 
 * The location of resources.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DynamoDB", elemType: CodeGenNodeArg })
  dynamoDb?: CodeGenNodeArg[];

  @SpeakeasyMetadata({ data: "json, name=Jdbc", elemType: CodeGenNodeArg })
  jdbc?: CodeGenNodeArg[];

  @SpeakeasyMetadata({ data: "json, name=S3", elemType: CodeGenNodeArg })
  s3?: CodeGenNodeArg[];
}
