import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";
/**
 * A Selenium testing project. Projects are used to collect and collate sessions.
**/
export declare class TestGridProject extends SpeakeasyBase {
    arn?: string;
    created?: Date;
    description?: string;
    name?: string;
    vpcConfig?: TestGridVpcConfig;
}
