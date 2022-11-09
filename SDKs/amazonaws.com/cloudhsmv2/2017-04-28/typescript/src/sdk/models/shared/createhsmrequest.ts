import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateHsmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;
}
