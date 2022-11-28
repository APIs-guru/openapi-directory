import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";



// UserDefinedFunction
/** 
 * Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
**/
export class UserDefinedFunction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClassName" })
  className?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerType" })
  ownerType?: PrincipalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceUris", elemType: ResourceUri })
  resourceUris?: ResourceUri[];
}
