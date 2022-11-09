import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListImagesFilter } from "./listimagesfilter";


export class ListImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: ListImagesFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
