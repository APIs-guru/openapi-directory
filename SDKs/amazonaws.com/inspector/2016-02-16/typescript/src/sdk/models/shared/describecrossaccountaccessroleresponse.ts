import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCrossAccountAccessRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registeredAt" })
  registeredAt: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
