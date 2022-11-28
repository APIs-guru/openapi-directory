import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringAuthorization } from "./vpcpeeringauthorization";



export class DescribeVpcPeeringAuthorizationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VpcPeeringAuthorizations", elemType: VpcPeeringAuthorization })
  vpcPeeringAuthorizations?: VpcPeeringAuthorization[];
}
