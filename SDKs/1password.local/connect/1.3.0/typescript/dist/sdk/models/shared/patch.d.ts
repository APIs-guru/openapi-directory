import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatchOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}
export declare class Patch extends SpeakeasyBase {
    op: PatchOpEnum;
    path: string;
    value?: Map<string, any>;
}
