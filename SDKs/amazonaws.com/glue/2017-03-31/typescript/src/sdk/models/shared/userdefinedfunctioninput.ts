import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";



// UserDefinedFunctionInput
/** 
 * A structure used to create or update a user-defined function.
**/
export class UserDefinedFunctionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClassName" })
  className?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerType" })
  ownerType?: PrincipalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceUris", elemType: ResourceUri })
  resourceUris?: ResourceUri[];
}
