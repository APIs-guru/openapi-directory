import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainTypeEnum } from "./domaintypeenum";



export class AllocateAddressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  carrierIp?: string;

  @SpeakeasyMetadata()
  customerOwnedIp?: string;

  @SpeakeasyMetadata()
  customerOwnedIpv4Pool?: string;

  @SpeakeasyMetadata()
  domain?: DomainTypeEnum;

  @SpeakeasyMetadata()
  networkBorderGroup?: string;

  @SpeakeasyMetadata()
  publicIp?: string;

  @SpeakeasyMetadata()
  publicIpv4Pool?: string;
}
