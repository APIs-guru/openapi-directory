import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
export declare class DescribeEventConfigurationsResponse extends SpeakeasyBase {
    creationDate?: Date;
    eventConfigurations?: Map<string, Configuration>;
    lastModifiedDate?: Date;
}
