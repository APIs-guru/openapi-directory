import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorProfile } from "./connectorprofile";



export class DescribeConnectorProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileDetails", elemType: ConnectorProfile })
  connectorProfileDetails?: ConnectorProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
