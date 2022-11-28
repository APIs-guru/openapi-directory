import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An integration in list of integrations.
**/
export declare class ListIntegrationItem extends SpeakeasyBase {
    createdAt: Date;
    domainName: string;
    lastUpdatedAt: Date;
    objectTypeName: string;
    tags?: Map<string, string>;
    uri: string;
}
