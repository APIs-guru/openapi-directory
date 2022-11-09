import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VpcPeeringAuthorization } from "./vpcpeeringauthorization";


export class DescribeVpcPeeringAuthorizationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=VpcPeeringAuthorizations", elemType: shared.VpcPeeringAuthorization })
  vpcPeeringAuthorizations?: VpcPeeringAuthorization[];
}
