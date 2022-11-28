import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualInterfaceTestHistory
/** 
 * Information about the virtual interface failover test.
**/
export class VirtualInterfaceTestHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bgpPeers" })
  bgpPeers?: string[];

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=testDurationInMinutes" })
  testDurationInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=testId" })
  testId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
