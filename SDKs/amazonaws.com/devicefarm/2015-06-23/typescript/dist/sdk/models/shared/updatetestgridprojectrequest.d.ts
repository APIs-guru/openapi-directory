import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";
export declare class UpdateTestGridProjectRequest extends SpeakeasyBase {
    description?: string;
    name?: string;
    projectArn: string;
    vpcConfig?: TestGridVpcConfig;
}
