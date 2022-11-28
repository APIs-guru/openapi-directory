import { SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { Counters } from "./counters";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { DeviceMinutes } from "./deviceminutes";
import { DeviceSelectionResult } from "./deviceselectionresult";
import { Location } from "./location";
import { NetworkProfile } from "./networkprofile";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { Radios } from "./radios";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionResultCodeEnum } from "./executionresultcodeenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";
/**
 * Represents a test run on a set of devices with a given app package, test parameters, and so on.
**/
export declare class Run extends SpeakeasyBase {
    appUpload?: string;
    arn?: string;
    billingMethod?: BillingMethodEnum;
    completedJobs?: number;
    counters?: Counters;
    created?: Date;
    customerArtifactPaths?: CustomerArtifactPaths;
    deviceMinutes?: DeviceMinutes;
    devicePoolArn?: string;
    deviceSelectionResult?: DeviceSelectionResult;
    eventCount?: number;
    jobTimeoutMinutes?: number;
    locale?: string;
    location?: Location;
    message?: string;
    name?: string;
    networkProfile?: NetworkProfile;
    parsingResultUrl?: string;
    platform?: DevicePlatformEnum;
    radios?: Radios;
    result?: ExecutionResultEnum;
    resultCode?: ExecutionResultCodeEnum;
    seed?: number;
    skipAppResign?: boolean;
    started?: Date;
    status?: ExecutionStatusEnum;
    stopped?: Date;
    testSpecArn?: string;
    totalJobs?: number;
    type?: TestTypeEnum;
    webUrl?: string;
}
