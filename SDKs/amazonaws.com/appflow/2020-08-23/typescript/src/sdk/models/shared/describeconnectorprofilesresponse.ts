import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorProfile } from "./connectorprofile";


export class DescribeConnectorProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileDetails", elemType: shared.ConnectorProfile })
  connectorProfileDetails?: ConnectorProfile[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
