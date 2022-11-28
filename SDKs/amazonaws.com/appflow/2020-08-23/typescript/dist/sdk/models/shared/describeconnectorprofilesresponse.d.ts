import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorProfile } from "./connectorprofile";
export declare class DescribeConnectorProfilesResponse extends SpeakeasyBase {
    connectorProfileDetails?: ConnectorProfile[];
    nextToken?: string;
}
