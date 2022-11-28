import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Describes a DHCP configuration option.
**/
export declare class DhcpConfiguration extends SpeakeasyBase {
    key?: string;
    values?: AttributeValue[];
}
