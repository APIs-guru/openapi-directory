import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PolicyHash" })
  policyHash?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyInJson" })
  policyInJson?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;
}
