import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateHsmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;
}
