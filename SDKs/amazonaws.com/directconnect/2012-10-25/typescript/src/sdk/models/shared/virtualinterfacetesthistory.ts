import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualInterfaceTestHistory
/** 
 * Information about the virtual interface failover test.
**/
export class VirtualInterfaceTestHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=bgpPeers" })
  bgpPeers?: string[];

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=testDurationInMinutes" })
  testDurationInMinutes?: number;

  @Metadata({ data: "json, name=testId" })
  testId?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
