import { SpeakeasyBase } from "../../../internal/utils";
import { Code } from "./code";
import { Toolchain } from "./toolchain";
export declare class CreateProjectRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    description?: string;
    id: string;
    name: string;
    sourceCode?: Code[];
    tags?: Map<string, string>;
    toolchain?: Toolchain;
}
