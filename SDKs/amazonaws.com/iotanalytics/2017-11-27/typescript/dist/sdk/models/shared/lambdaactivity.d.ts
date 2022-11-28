import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that runs a Lambda function to modify the message.
**/
export declare class LambdaActivity extends SpeakeasyBase {
    batchSize: number;
    lambdaName: string;
    name: string;
    next?: string;
}
