import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnection } from "./clientvpnconnection";



export class DescribeClientVpnConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientVpnConnection })
  connections?: ClientVpnConnection[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
