import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridVpcConfig } from "./testgridvpcconfig";
export declare class CreateTestGridProjectRequest extends SpeakeasyBase {
    description?: string;
    name: string;
    vpcConfig?: TestGridVpcConfig;
}
