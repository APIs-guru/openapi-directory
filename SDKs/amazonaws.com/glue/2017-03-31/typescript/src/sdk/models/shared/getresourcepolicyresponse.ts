import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=PolicyHash" })
  policyHash?: string;

  @Metadata({ data: "json, name=PolicyInJson" })
  policyInJson?: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;
}
